import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface DSMEMBERAttributes {
    LSETID: number;
    LOBJECTID: number;
    LINTERNALUSN?: number;
    STRRPLGUID?: string;
}

@Table({
	tableName: "DSMEMBER",
	timestamps: false 
})
export class DSMEMBER extends Model<DSMEMBERAttributes, DSMEMBERAttributes> implements DSMEMBERAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER 
    })
    	LSETID!: number;

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER 
    })
    	LOBJECTID!: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LINTERNALUSN?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(40) 
    })
    	STRRPLGUID?: string;

}