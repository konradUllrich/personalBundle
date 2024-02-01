import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface IS_SYSTEMMESSAGE_REFERENCEAttributes {
    DTINSERT?: Date;
    FKLID?: number;
    LID: number;
    STR_RECID?: string;
    DT_DATE?: Date;
    DTEDIT?: Date;
    LUSERID?: number;
    REF_PROFILE_ID?: string;
    LUSERIDINSERT?: number;
}

@Table({
	tableName: "IS_SYSTEMMESSAGE_REFERENCE",
	timestamps: false 
})
export class IS_SYSTEMMESSAGE_REFERENCE extends Model<IS_SYSTEMMESSAGE_REFERENCEAttributes, IS_SYSTEMMESSAGE_REFERENCEAttributes> implements IS_SYSTEMMESSAGE_REFERENCEAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	FKLID?: number;

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER 
    })
    	LID!: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_RECID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_DATE?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_PROFILE_ID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

}