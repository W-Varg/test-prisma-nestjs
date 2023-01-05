import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UnidadService } from "./unidad.service";
import { UnidadControllerBase } from "./base/unidad.controller.base";

@swagger.ApiTags("unidads")
@common.Controller("unidads")
export class UnidadController extends UnidadControllerBase {
  constructor(
    protected readonly service: UnidadService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
