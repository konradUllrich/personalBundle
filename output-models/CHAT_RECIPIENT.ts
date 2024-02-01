import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface CHAT_RECIPIENTAttributes {
    STR_USER?: string;
    LUSERID?: number;
    B_ARCHIVE?: boolean;
    STR_NOTIFICATION?: string;
    DT_EMAIL?: Date;
    B_NOTIFICATION?: boolean;
    REF_USERID?: number;
    B_HIDECHATWINDOW?: boolean;
    B_ADDED?: boolean;
    FKSTRID?: string;
    DTINSERT?: Date;
    B_EMAIL?: boolean;
    DT_LASTACTIVITY?: Date;
    LUSERIDINSERT?: number;
    B_HIDEPARTICIPANTS?: boolean;
    DTEDIT?: Date;
    B_SENDMAIL?: boolean;
    B_READ?: boolean;
    STRID: string;
}

@Table({
	tableName: "CHAT_RECIPIENT",
	timestamps: false 
})
export class CHAT_RECIPIENT extends Model<CHAT_RECIPIENTAttributes, CHAT_RECIPIENTAttributes> implements CHAT_RECIPIENTAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_USER?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_ARCHIVE?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_NOTIFICATION?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_EMAIL?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_NOTIFICATION?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	REF_USERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_HIDECHATWINDOW?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_ADDED?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	FKSTRID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_EMAIL?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_LASTACTIVITY?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_HIDEPARTICIPANTS?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_SENDMAIL?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_READ?: boolean;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

}