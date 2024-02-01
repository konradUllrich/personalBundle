import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface IS_SYSTEMMESSAGEAttributes {
    REF_RECIPIENT_ID?: string;
    STR_KEY?: string;
    STR_PLUGIN_GUID?: string;
    TXT_SUBJECT?: string;
    LID: number;
    DTEDIT?: Date;
    DTINSERT?: Date;
    B_READ?: boolean;
    LUSERIDINSERT?: number;
    LUSERID?: number;
    L_FEED_RECID?: number;
    DT_DATE?: Date;
    STR_RECID?: string;
    L_COUNT?: number;
    REF_CREATOR_ID?: string;
    L_COMMENT_RECID?: number;
    B_HIDE?: boolean;
}

@Table({
	tableName: "IS_SYSTEMMESSAGE",
	timestamps: false 
})
export class IS_SYSTEMMESSAGE extends Model<IS_SYSTEMMESSAGEAttributes, IS_SYSTEMMESSAGEAttributes> implements IS_SYSTEMMESSAGEAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_RECIPIENT_ID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_KEY?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_PLUGIN_GUID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_SUBJECT?: string;

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER 
    })
    	LID!: number;

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

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_READ?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_FEED_RECID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_DATE?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_RECID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_COUNT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_CREATOR_ID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_COMMENT_RECID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_HIDE?: boolean;

}