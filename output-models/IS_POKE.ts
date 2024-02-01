import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface IS_POKEAttributes {
    LUSERIDINSERT?: number;
    REF_USER_GUID?: string;
    LUSERID?: number;
    LID: number;
    STR_TYPE?: string;
    STR_TEXT?: string;
    REF_RECIPIENT_USER_GUID?: string;
    DTEDIT?: Date;
    DTINSERT?: Date;
}

@Table({
	tableName: "IS_POKE",
	timestamps: false 
})
export class IS_POKE extends Model<IS_POKEAttributes, IS_POKEAttributes> implements IS_POKEAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_USER_GUID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER 
    })
    	LID!: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_TYPE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_TEXT?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_RECIPIENT_USER_GUID?: string;

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

}