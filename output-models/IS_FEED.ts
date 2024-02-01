import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface IS_FEEDAttributes {
    LUSERID?: number;
    L_CONVERSATION_MASTER_ID?: number;
    LUSERIDINSERT?: number;
    DT_LAST_INTERACTION?: Date;
    TXT_EMPFAENGER?: string;
    DT_ARCHIVING?: Date;
    STR_OBJECT_ID?: string;
    STR_CLASS?: string;
    STR_CREATOR_USER_GUID?: string;
    DT_MATURITY?: Date;
    DTINSERT?: Date;
    B_SUPPRESS?: boolean;
    B_READ_REQUEST?: boolean;
    STR_BETREFF?: string;
    DT_DELETION?: Date;
    B_PLUGIN_DELETED?: boolean;
    L_FORWARDED_MASTER_ID?: number;
    DT_EDIT_PLUGIN_RECORD?: Date;
    TXT_COMMENT?: string;
    LID: number;
    DT_FEED_POSITION?: Date;
    STR_TYPE_OF_FEED_ASSIGNMENT?: string;
    STR_PLUGIN_GUID?: string;
    L_LIKES?: number;
    STR_POST_STATUS?: string;
    DTEDIT?: Date;
    STR_PLUGIN_RECID?: string;
    L_GENUINE_MASTER_ID?: number;
    B_IMPORTANT?: boolean;
    B_URGENT?: boolean;
    B_DELETED?: boolean;
    L_COMMENTS?: number;
    STR_ADMIN_GUID?: string;
    STR_PRIVACY_LEVEL?: string;
    L_CHART?: number;
}

@Table({
	tableName: "IS_FEED",
	timestamps: false 
})
export class IS_FEED extends Model<IS_FEEDAttributes, IS_FEEDAttributes> implements IS_FEEDAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_CONVERSATION_MASTER_ID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_LAST_INTERACTION?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_EMPFAENGER?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_ARCHIVING?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_OBJECT_ID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_CLASS?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(40) 
    })
    	STR_CREATOR_USER_GUID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_MATURITY?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_SUPPRESS?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_READ_REQUEST?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_BETREFF?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_DELETION?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_PLUGIN_DELETED?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_FORWARDED_MASTER_ID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_EDIT_PLUGIN_RECORD?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_COMMENT?: string;

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER 
    })
    	LID!: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_FEED_POSITION?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_TYPE_OF_FEED_ASSIGNMENT?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(40) 
    })
    	STR_PLUGIN_GUID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_LIKES?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_POST_STATUS?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(1024) 
    })
    	STR_PLUGIN_RECID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_GENUINE_MASTER_ID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_IMPORTANT?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_URGENT?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_DELETED?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_COMMENTS?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(40) 
    })
    	STR_ADMIN_GUID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_PRIVACY_LEVEL?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_CHART?: number;

}