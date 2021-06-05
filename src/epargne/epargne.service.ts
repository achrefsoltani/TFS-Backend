import { Epargne } from './../entities/epargne.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';


import { Repository, UpdateResult, DeleteResult } from  'typeorm';


@Injectable()
export class EpargneService {
    constructor(
        @InjectRepository(Epargne)
        private epargneRepository: Repository<Epargne>
    ){}

    async create(epargne: Epargne): Promise<Epargne> {
        return await this.epargneRepository.save(epargne);
    }
    
    async  readAll(): Promise<Epargne[]> {
        return await this.epargneRepository.find();
    }

    async update(epargne: Epargne): Promise<UpdateResult> {

        return await this.epargneRepository.update(epargne.id,epargne);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.epargneRepository.delete(id);
    }

    
    
}
