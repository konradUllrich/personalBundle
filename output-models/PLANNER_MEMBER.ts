import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface PLANNER_MEMBERAttributes {
    LUSERID?: number;
    DTINSERT?: Date;
    L_STATUS?: number;
    STRID: string;
    TXT_TIMES?: string;
    FKID?: string;
    LUSERIDINSERT?: number;
    REF_59603D75?: number;
    STR_NOTIFICATION?: string;
    DTEDIT?: Date;
    B_NOTIFICATION?: boolean;
    STR_MEMBER?: string;
}

@Table({
	tableName: "PLANNER_MEMBER",
	timestamps: false 
})
export class PLANNER_MEMBER extends Model<PLANNER_MEMBERAttributes, PLANNER_MEMBERAttributes> implements PLANNER_MEMBERAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_STATUS?: number;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_TIMES?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	FKID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	REF_59603D75?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_NOTIFICATION?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_NOTIFICATION?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_MEMBER?: string;

}