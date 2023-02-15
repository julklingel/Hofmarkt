import { PrismaService } from 'src/db-module/prisma.service';
import { supplierDto } from './dto';
export declare class SupplierService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getSuppliers(): any;
    getSupplier(id: any): any;
    createSupplier(dto: supplierDto): import("@prisma/client").Prisma.Prisma__SupplierClient<import("@prisma/client").Supplier, never>;
}
