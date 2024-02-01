import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface XCALENDARRULEAttributes {
    STRID: string;
    LUSERID?: number;
    LUSERIDINSERT?: number;
    DTEDIT?: Date;
    DTINSERT?: Date;
    STR_RULE?: string;
}

@Table({
	tableName: "XCALENDARRULE",
	timestamps: false 
})
export class XCALENDARRULE extends Model<XCALENDARRULEAttributes, XCALENDARRULEAttributes> implements XCALENDARRULEAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_RULE?: string;

}