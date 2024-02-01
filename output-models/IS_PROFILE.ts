import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface IS_PROFILEAttributes {
    STR_DEPARTMENT?: string;
    DTEDIT?: Date;
    B_DELETED?: boolean;
    DTINSERT?: Date;
    L_COMMENTS?: number;
    B_ROUND_ICONS?: boolean;
    B_HIDE_PHOTO?: boolean;
    B_CHANGE_NAVIGATION?: boolean;
    STR_ORDER?: string;
    STR_FEED_ORDER_PREF?: string;
    STR_GLOBALMAILSETTINGS?: string;
    L_EVENTS?: number;
    STR_SKYPE?: string;
    LUSERIDINSERT?: number;
    L_COUNT_VISIBLE_COMMENTS?: number;
    STR_PRIVACY_LEVEL_CONTACTS?: string;
    TXT_CAREER?: string;
    B_DEACTIVATED?: boolean;
    STR_EMAIL?: string;
    B_MERGE_ACTIONS?: boolean;
    LUSERID?: number;
    STR_GLOBALPUSHSETTINS?: string;
    STR_RANDOM_GUID?: string;
    STR_PHONE_PRIVATE?: string;
    STR_XING?: string;
    STR_LOCATION?: string;
    STR_TWITTER?: string;
    STR_PHONE_BUSINESS?: string;
    STR_PRIVACY_LEVEL_PI?: string;
    TXT_KNOWLEDGE?: string;
    L_GROUPS?: number;
    STR_EMAIL_PRIVATE?: string;
    STR_JOBTITLE?: string;
    B_ANONYMOUS?: boolean;
    L_DAYS_REMOVE_MSG?: number;
    STR_FACEBOOK?: string;
    B_MODULTITELAUSBLENDEN?: boolean;
    L_POSTS?: number;
    REF_64B6AFEC?: number;
    STR_GENDER?: string;
    L_PROFILE_IMAGE?: number;
    L_VIEWS?: number;
    STR_HANDY?: string;
    STRID: string;
    STR_HOMEPAGE?: string;
    STR_PRIVACY_LEVEL_PERSONAL_FEE?: string;
    STR_NAME?: string;
    DT_SYS_MESSAGE_MARKED_AS_READ?: Date;
    L_LIKES?: number;
    STR_COMPANY?: string;
    DT_BIRTHDAY?: Date;
    STR_PRIVACY_LEVEL_POKES?: string;
    STR_DELETION_STATUS?: string;
    DT_DELETION?: Date;
}

@Table({
	tableName: "IS_PROFILE",
	timestamps: false 
})
export class IS_PROFILE extends Model<IS_PROFILEAttributes, IS_PROFILEAttributes> implements IS_PROFILEAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_DEPARTMENT?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_DELETED?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_COMMENTS?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_ROUND_ICONS?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_HIDE_PHOTO?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_CHANGE_NAVIGATION?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_ORDER?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_FEED_ORDER_PREF?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_GLOBALMAILSETTINGS?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_EVENTS?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_SKYPE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_COUNT_VISIBLE_COMMENTS?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_PRIVACY_LEVEL_CONTACTS?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_CAREER?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_DEACTIVATED?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_EMAIL?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_MERGE_ACTIONS?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_GLOBALPUSHSETTINS?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_RANDOM_GUID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_PHONE_PRIVATE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_XING?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_LOCATION?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_TWITTER?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_PHONE_BUSINESS?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_PRIVACY_LEVEL_PI?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_KNOWLEDGE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_GROUPS?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_EMAIL_PRIVATE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_JOBTITLE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_ANONYMOUS?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_DAYS_REMOVE_MSG?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_FACEBOOK?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_MODULTITELAUSBLENDEN?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_POSTS?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	REF_64B6AFEC?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_GENDER?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_PROFILE_IMAGE?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_VIEWS?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_HANDY?: string;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_HOMEPAGE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_PRIVACY_LEVEL_PERSONAL_FEE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_NAME?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_SYS_MESSAGE_MARKED_AS_READ?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_LIKES?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_COMPANY?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_BIRTHDAY?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_PRIVACY_LEVEL_POKES?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_DELETION_STATUS?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_DELETION?: Date;

}