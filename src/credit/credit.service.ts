import { Credit } from './../entities/credit.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';


import { Repository, UpdateResult, DeleteResult } from  'typeorm';


@Injectable()
export class CreditService {
    constructor(
        @InjectRepository(Credit)
        private creditRepository: Repository<Credit>
    ){}

    async create(credit: Credit): Promise<Credit> {
        return await this.creditRepository.save(credit);
    }
    
    async  readAll(): Promise<Credit[]> {
        return await this.creditRepository.find();
    }

    async update(credit: Credit): Promise<UpdateResult> {

        return await this.creditRepository.update(credit.id,credit);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.creditRepository.delete(id);
    }
    
}
