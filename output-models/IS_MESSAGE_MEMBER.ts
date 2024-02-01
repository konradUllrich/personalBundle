import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface IS_MESSAGE_MEMBERAttributes {
    LUSERIDINSERT?: number;
    DTEDIT?: Date;
    FKSTRID?: string;
    LUSERID?: number;
    B_SHOW_FEEDS_ON_NEWS?: boolean;
    STR_RECIPIENT?: string;
    LID: number;
    DTINSERT?: Date;
    B_ARCHIVED?: boolean;
}

@Table({
	tableName: "IS_MESSAGE_MEMBER",
	timestamps: false 
})
export class IS_MESSAGE_MEMBER extends Model<IS_MESSAGE_MEMBERAttributes, IS_MESSAGE_MEMBERAttributes> implements IS_MESSAGE_MEMBERAttributes {

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
    	type: DataType.STRING(255) 
    })
    	FKSTRID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_SHOW_FEEDS_ON_NEWS?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_RECIPIENT?: string;

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER 
    })
    	LID!: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_ARCHIVED?: boolean;

}