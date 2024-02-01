import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface XPOLL_CATEGORYCAC0FC67Attributes {
    DTINSERT?: Date;
    STR_CATEGORY?: string;
    LUSERID?: number;
    DTEDIT?: Date;
    LID: number;
    LUSERIDINSERT?: number;
}

@Table({
	tableName: "XPOLL_CATEGORYCAC0FC67",
	timestamps: false 
})
export class XPOLL_CATEGORYCAC0FC67 extends Model<XPOLL_CATEGORYCAC0FC67Attributes, XPOLL_CATEGORYCAC0FC67Attributes> implements XPOLL_CATEGORYCAC0FC67Attributes {

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_CATEGORY?: string;

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

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER 
    })
    	LID!: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

}