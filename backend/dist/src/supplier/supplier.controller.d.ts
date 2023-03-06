import { supplierDto } from './dto';
import { SupplierService } from './supplier.service';
export declare class SupplierController {
    private supplierService;
    constructor(supplierService: SupplierService);
    getSuppliers(): Promise<any>;
    getFeaturedSuppliers(): Promise<any>;
    getSupplier(id: string): Promise<any>;
    createSupplier(dto: supplierDto): import(".prisma/client").Prisma.Prisma__SupplierClient<import(".prisma/client").Supplier, never>;
}
