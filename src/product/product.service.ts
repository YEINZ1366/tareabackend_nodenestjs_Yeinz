import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class ProductService {
    private products = [
        {
          id: 1,
          nombre: 'Creatina OptiSupp',
          descripcion: 'Suplemento de creatina para el rendimiento deportivo.',
          precio: 350,
        },
        {
          id: 2,
          nombre: 'Proteína PowerGain',
          descripcion: 'Proteína en polvo para la recuperación muscular.',
          precio: 750,
        },
        {
          id: 3,
          nombre: 'MultiVita Sport',
          descripcion: 'Multivitamínico para deportistas.',
          precio: 250,
        },
        {
          id: 4,
          nombre: 'AminoPlus',
          descripcion: 'Aminoácidos esenciales para el desarrollo muscular.',
          precio:300,
        },
        {
          id: 5,
          nombre: 'OmegaHealth',
          descripcion: 'Omega-3 en cápsulas para la salud cardiovascular.',
          precio: 250,
        },
      ];
      
      findAll() {
        return this.products;
      }
      
      findById(id: number) {
        const product = this.products.find((p) => p.id === id);
      
        if (!product) {
          throw new NotFoundException(`Product with id ${id} does not exist`);
        }
        return product;
      }
      
  updateProduct(productBody, id) {
    // Validaciones del producto
    const index = this.products.findIndex((p) => p.id === id);

    if (index === -1) {
      throw new NotFoundException(`Product with id ${id} does not exist`);
    }

    // Actualizar el producto
    this.products[index] = { ...this.products[index], ...productBody };
    return { status: 'Producto actualizado' };
  }

  deleteProduct(id) {
    const index = this.products.findIndex((p) => p.id === id);

    if (index === -1) {
      throw new NotFoundException(`Product with id ${id} does not exist`);
    }

    // Eliminar el producto
    this.products.splice(index, 1);
    return { status: 'Producto eliminado' };
  }

  createProduct(productBody) {
    // Validaciones del producto
    const product = this.products.find((p) => p.id === productBody.id);

    if (product) {
      throw new NotFoundException(`Product with id ${productBody.id} already exists`);
    }

    // Crear el producto
    const newProduct = { id: this.products.length + 1, ...productBody };
    this.products.push(newProduct);
    return { status: 'Producto creado' };
  }
      
}
