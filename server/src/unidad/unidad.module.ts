import { Module } from "@nestjs/common";
import { UnidadModuleBase } from "./base/unidad.module.base";
import { UnidadService } from "./unidad.service";
import { UnidadController } from "./unidad.controller";
import { UnidadResolver } from "./unidad.resolver";

@Module({
  imports: [UnidadModuleBase],
  controllers: [UnidadController],
  providers: [UnidadService, UnidadResolver],
  exports: [UnidadService],
})
export class UnidadModule {}
