import {
  GoogleSpreadsheet,
  ServiceAccountCredentials,
} from "google-spreadsheet";
import { Project } from "../typings/Project";

type CredentialType = {
  type: string | undefined;
  project_id: string | undefined;
  private_key_id: string | undefined;
  private_key: string | undefined;
  client_email: string | undefined;
  client_id: string | undefined;
  auth_uri: string | undefined;
  token_uri: string | undefined;
  auth_provider_x509_cert_url: string | undefined;
  client_x509_cert_url: string | undefined;
};

const createCreds = (): CredentialType | undefined => {
  const reactPrivateKey: string | undefined = process.env
    .REACT_APP_GOOGLE_CREDENTIAL_PRIVATE_KEY as string;
  const privateKey: string = reactPrivateKey as string | "{privateKey: null}";
  let creds: CredentialType = {
    type: process.env.REACT_APP_GOOGLE_CREDENTIAL_TYPE,
    project_id: process.env.REACT_APP_GOOGLE_CREDENTIAL_PROJECT_ID,
    private_key_id: process.env.REACT_APP_GOOGLE_CREDENTIAL_PRIVATE_KEY_ID,
    private_key: JSON.parse(privateKey).privateKey,
    client_email: process.env.REACT_APP_GOOGLE_CREDENTIAL_CLIENT_EMAIL,
    client_id: process.env.REACT_APP_GOOGLE_CREDENTIAL_CLIENT_ID,
    auth_uri: process.env.REACT_APP_GOOGLE_CREDENTIAL_AUTH_URI,
    token_uri: process.env.REACT_APP_GOOGLE_CREDENTIAL_TOKEN_URI,
    auth_provider_x509_cert_url:
      process.env.REACT_APP_GOOGLE_CREDENTIAL_AUTH_PROVIDER_X509_CERT_URL,
    client_x509_cert_url:
      process.env.REACT_APP_GOOGLE_CREDENTIAL_CLIENT_X509_CERT_URL,
  };

  const hasUndefined = Object.values(creds).filter(
    (credValue) => credValue === undefined
  );
  if (hasUndefined.length > 0) {
    return undefined;
  } else {
    return creds;
  }
};

const fetchGoogle = async (): Promise<{
  projects: Array<Project>;
  error: boolean;
}> => {
  const projectsSheetId = process.env.REACT_APP_GOOGLE_PROJECTS_SHEET_ID;
  let error = false;

  let projects: any[] = [];

  const creds = createCreds();

  if (!projectsSheetId || !creds)
    return {
      projects,
      error: true,
    };

  const doc = new GoogleSpreadsheet(projectsSheetId);
  try {
    doc.useServiceAccountAuth(creds as ServiceAccountCredentials);

    await doc.loadInfo();

    const sheet = doc.sheetsByIndex[0];

    const rows = await sheet.getRows();

    rows.forEach((row) => {
      projects.push({
        title: row.title as string,
        category: row.category as string,
        fullDescription: row.fullDescription,
        excerpt: row.excerpt as string,
        myRole: row.myRole,
        image: row.image,
        tools: row.tools.split(",").map((tool: string) => tool.trim()),
        mainTag: row.mainTag.split(",").map((tag: string) => tag.trim()),
        github: row.github,
        projectUrl: row.projectUrl,
        projectDate: new Date(row.projectDate).getTime(),
      });
    });

    return {
      projects,
      error: false,
    };
  } catch (err) {
    console.log(err);
    return {
      projects,
      error: true,
    };
  }
};

export default fetchGoogle;

// example using impersonation - NOTE: your service account must have "domain-wide delegation" enabled
// see https://developers.google.com/identity/protocols/oauth2/service-account#delegatingauthority
// await doc.useServiceAccountAuth(creds, 'user.to.impersonate@mycompany.com')
