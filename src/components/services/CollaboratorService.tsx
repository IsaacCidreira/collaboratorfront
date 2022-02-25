import { HttpClient } from './utils/HttpClient';

class CollaboratorService {
  private httpClient: InstanceType<new (...args: []) => any>;
  constructor() {
    this.httpClient = new HttpClient(`${process.env.REACT_APP_API_URL}`);
  }
  async listCollaborator() {
    return this.httpClient.get('/collaborator');
  }

  async listCollaboratorOne(id: string) {
    return this.httpClient.get(`/collaborator/${id}`);
  }

  async deleteCollaboratorOne(id: string) {
    return this.httpClient.delete(
      `${process.env.REACT_APP_API_URL}/collaborator/${id}`,
    );
  }

  async postCollaborator(
    name: string,
    cargo: string,
    telefone: string,
    url: string,
  ) {
    return this.httpClient.post(
      `${process.env.REACT_APP_API_URL}/collaborator`,
      {
        name: name,
        cargo: cargo,
        telefone: telefone,
        url: url,
      },
    );
  }

  async puttCollaborator(
    id: string,
    name: string,
    cargo: string,
    telefone: string,
    url: string,
  ) {
    return this.httpClient.put(`http://localhost:3333/collaborator/${id}`, {
      name: name,
      cargo: cargo,
      telefone: telefone,
      url: url,
    });
  }
}

export default new CollaboratorService();
