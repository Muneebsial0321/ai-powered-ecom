import { CreateMailDto } from './dto/create-mail.dto';
import { UpdateMailDto } from './dto/update-mail.dto';
export declare class MailService {
    create(createMailDto: CreateMailDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateMailDto: UpdateMailDto): string;
    remove(id: number): string;
}
