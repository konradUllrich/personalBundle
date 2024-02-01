import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface KB_T_SERIENTERMINEAttributes {
    LUSERIDINSERT?: number;
    DTINSERT?: Date;
    STR_RULE?: string;
    STRID: string;
    LUSERID?: number;
    DTEDIT?: Date;
}

@Table({
	tableName: "KB_T_SERIENTERMINE",
	timestamps: false 
})
export class KB_T_SERIENTERMINE extends Model<KB_T_SERIENTERMINEAttributes, KB_T_SERIENTERMINEAttributes> implements KB_T_SERIENTERMINEAttributes {

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
    	type: DataType.STRING(255) 
    })
    	STR_RULE?: string;

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
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

}