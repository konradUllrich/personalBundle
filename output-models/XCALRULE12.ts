import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface XCALRULE12Attributes {
    LUSERIDINSERT?: number;
    LUSERID?: number;
    STR_RULE?: string;
    DTEDIT?: Date;
    STRID: string;
    DTINSERT?: Date;
}

@Table({
	tableName: "XCALRULE12",
	timestamps: false 
})
export class XCALRULE12 extends Model<XCALRULE12Attributes, XCALRULE12Attributes> implements XCALRULE12Attributes {

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_RULE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

}