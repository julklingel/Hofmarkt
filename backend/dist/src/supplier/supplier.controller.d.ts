import { supplierDto } from './dto';
import { SupplierService } from './supplier.service';
export declare class SupplierController {
    private supplierService;
    constructor(supplierService: SupplierService);
    getSuppliers(): any;
    getSupplier(id: string): any;
    createSupplier(dto: supplierDto): import("@prisma/client").Prisma.Prisma__SupplierClient<import("@prisma/client").Supplier, never>;
}
