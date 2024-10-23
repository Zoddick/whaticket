import {
  Table,
  Column,
  Model,
  ForeignKey,
  CreatedAt,
  UpdatedAt
} from "sequelize-typescript";
import User from "./User";
import Company from "./Company";

@Table
class UserCompany extends Model<UserCompany> {
  @ForeignKey(() => User)
  @Column
  userId: number; // ID do usuário

  @ForeignKey(() => Company)
  @Column
  companyId: number; // ID da empresa

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;
}

export default UserCompany;