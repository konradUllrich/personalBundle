import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface LCPOLICYAttributes {
    LOBJECTID: number;
    LPERMCLASSID: number;
    STRNAME: string;
    STRACTIONS?: string;
}

@Table({
	tableName: "LCPOLICY",
	timestamps: false 
})
export class LCPOLICY extends Model<LCPOLICYAttributes, LCPOLICYAttributes> implements LCPOLICYAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER 
    })
    	LOBJECTID!: number;

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER 
    })
    	LPERMCLASSID!: number;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRNAME!: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STRACTIONS?: string;

}