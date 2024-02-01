import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface DSSTATUSAttributes {
    LLASTIUSN: number;
}

@Table({
	tableName: "DSSTATUS",
	timestamps: false 
})
export class DSSTATUS extends Model<DSSTATUSAttributes, DSSTATUSAttributes> implements DSSTATUSAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER 
    })
    	LLASTIUSN!: number;

}