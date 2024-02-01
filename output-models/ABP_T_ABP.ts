import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface ABP_T_ABPAttributes {
    DTEDIT?: Date;
    L_JAHR?: number;
    REF_PLANUNGSPROZESS?: string;
    LUSERIDINSERT?: number;
    DTINSERT?: Date;
    LUSERID?: number;
    STRID: string;
    REF_BL?: string;
    REF_BUEROLEITUNG?: number;
}

@Table({
	tableName: "ABP_T_ABP",
	timestamps: false 
})
export class ABP_T_ABP extends Model<ABP_T_ABPAttributes, ABP_T_ABPAttributes> implements ABP_T_ABPAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_JAHR?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_PLANUNGSPROZESS?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_BL?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	REF_BUEROLEITUNG?: number;

}