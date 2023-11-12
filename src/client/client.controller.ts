import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ClientService } from './client.service';

@Controller('client')
export class ClientController {

    constructor (private readonly ClientService: ClientService){}


    @Get()
    getClient(){
        return this.ClientService.findAll();
    }

    @Get(':id')
    getClientById(@Param('id', ParseIntPipe) id: number){
        
        console.log(`el id a buscar es ${id}`)
        return this.ClientService.findById(id);

    }

    @Put(':id')
    updateClient(@Param('id', ParseIntPipe) id: number, @Body() body){
        
        console.log(`el id a actualizar es ${id}`)
        console.log(body);

        return this.ClientService.updateClient(body, id);

    }

    @Delete(':id')
    deleteClient(@Param('id', ParseIntPipe) id: number){
        
        console.log(`el id a eliminar es ${id}`)
        return this.ClientService.deleteClient(id);

    }

    @Post()
    createClient(@Body() body){
        
        console.log(body)
        
        return this.ClientService.createClient(body);

    }
}
