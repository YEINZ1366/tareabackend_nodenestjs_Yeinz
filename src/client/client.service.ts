import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class ClientService {
  private clients = [
    {
      id: 1,
      nombre: 'Jaime Baltazar',
      direccion: 'Monjas, Jalapa',
    },
    {
      id: 2,
      nombre: 'Jonathan Ramirez',
      direccion: 'San Antonio Huista',
    },
    {
      id: 3,
      nombre: 'Estuardo Escobar',
      direccion: 'Soloma',
    },
    {
      id: 4,
      nombre: 'Elder Ferlandy',
      direccion: 'La Libertad',
    },
    {
      id: 5,
      nombre: 'Omar Sontay',
      direccion: 'Nenton',
    },
  ];

  findAll() {
    return this.clients;
  }

  findById(id: number) {
    const client = this.clients.find((c) => c.id === id);

    if (!client) {
      throw new NotFoundException(`Client with id ${id} does not exist`);
    }
    return client;
  }

  updateClient(clientBody, id) {
    // Validaciones del cliente
    const index = this.clients.findIndex((c) => c.id === id);

    if (index === -1) {
      throw new NotFoundException(`Client with id ${id} does not exist`);
    }

    // Actualizar el cliente
    this.clients[index] = { ...this.clients[index], ...clientBody };
    return { status: 'Cliente actualizado' };
  }

  deleteClient(id) {
    const index = this.clients.findIndex((c) => c.id === id);

    if (index === -1) {
      throw new NotFoundException(`Client with id ${id} does not exist`);
    }

    // Eliminar el cliente
    this.clients.splice(index, 1);
    return { status: 'Cliente eliminado' };
  }

  createClient(clientBody) {
    // Validaciones del cliente
    const client = this.clients.find((c) => c.id === clientBody.id);

    if (client) {
      throw new NotFoundException(`Client with id ${clientBody.id} already exists`);
    }

    // Crear el cliente
    const newClient = { id: this.clients.length + 1, ...clientBody };
    this.clients.push(newClient);
    return { status: 'Cliente creado' };
  }
}
