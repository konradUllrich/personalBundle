import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface CHAT_MESSAGEAttributes {
    STR_USERNAME?: string;
    B_STATUS?: boolean;
    LUSERIDINSERT?: number;
    TXT_MEDIA?: string;
    LUSERID?: number;
    DTEDIT?: Date;
    FKSTRID?: string;
    STRID: string;
    TXT_MESSAGE?: string;
    L_FILEINFORMATION?: number;
    DTINSERT?: Date;
}

@Table({
	tableName: "CHAT_MESSAGE",
	timestamps: false 
})
export class CHAT_MESSAGE extends Model<CHAT_MESSAGEAttributes, CHAT_MESSAGEAttributes> implements CHAT_MESSAGEAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_USERNAME?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_STATUS?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_MEDIA?: string;

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
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	FKSTRID?: string;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_MESSAGE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_FILEINFORMATION?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

}