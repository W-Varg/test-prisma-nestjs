import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UnidadServiceBase } from "./base/unidad.service.base";

@Injectable()
export class UnidadService extends UnidadServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
