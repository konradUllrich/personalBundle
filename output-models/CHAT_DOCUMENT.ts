import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface CHAT_DOCUMENTAttributes {
    STRID: string;
    LUSERIDINSERT?: number;
    DTEDIT?: Date;
    L_DOCUMENT?: number;
    REF_MESSAGE_ID?: string;
    DTINSERT?: Date;
    LUSERID?: number;
    FKSTRID?: string;
}

@Table({
	tableName: "CHAT_DOCUMENT",
	timestamps: false 
})
export class CHAT_DOCUMENT extends Model<CHAT_DOCUMENTAttributes, CHAT_DOCUMENTAttributes> implements CHAT_DOCUMENTAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

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
    	type: DataType.INTEGER 
    })
    	L_DOCUMENT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_MESSAGE_ID?: string;

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
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	FKSTRID?: string;

}