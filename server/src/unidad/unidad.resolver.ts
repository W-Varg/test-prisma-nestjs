import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { UnidadResolverBase } from "./base/unidad.resolver.base";
import { Unidad } from "./base/Unidad";
import { UnidadService } from "./unidad.service";

@graphql.Resolver(() => Unidad)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class UnidadResolver extends UnidadResolverBase {
  constructor(
    protected readonly service: UnidadService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
