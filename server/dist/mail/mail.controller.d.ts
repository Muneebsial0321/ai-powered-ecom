import { MailService } from './mail.service';
import { CreateMailDto } from './dto/create-mail.dto';
import { UpdateMailDto } from './dto/update-mail.dto';
export declare class MailController {
    private readonly mailService;
    constructor(mailService: MailService);
    create(createMailDto: CreateMailDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateMailDto: UpdateMailDto): string;
    remove(id: string): string;
}
