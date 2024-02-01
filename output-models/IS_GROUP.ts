import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface IS_GROUPAttributes {
    L_MEMBERS?: number;
    B_GENERATE_FEED?: boolean;
    STR_PARENT_GUID?: string;
    REF_LAST_CHANGE_PROFILE_ID?: string;
    DTINSERT?: Date;
    B_DELETED?: boolean;
    LUSERID?: number;
    DT_LAST_CHANGE?: Date;
    B_READONLY?: boolean;
    B_MEMBERS_CAN_CREATE_CONNECT?: boolean;
    TXT_SYNCHONIZATION?: string;
    STR_TITLE?: string;
    L_SORTIERUNG?: number;
    B_IMPORTANT?: boolean;
    B_SYNC_GROUPS?: boolean;
    LUSERIDINSERT?: number;
    DTEDIT?: Date;
    L_CHART?: number;
    REF_MODERATOR_PROFILE_ID?: string;
    B_RECOMMENDATION_ENABLED?: boolean;
    B_URGENT?: boolean;
    L_IMAGE?: number;
    L_POST_COUNT?: number;
    TXT_DELETED_MEMBERS?: string;
    STR_STATUS?: string;
    B_ACTIVATE_APPLICATIONS?: boolean;
    TXT_DESCRIPTION?: string;
    STRID: string;
    DT_DELETION?: Date;
    STR_PRIVACY_LEVEL?: string;
    REF_INV_MOD_PROFILE_ID?: string;
}

@Table({
	tableName: "IS_GROUP",
	timestamps: false 
})
export class IS_GROUP extends Model<IS_GROUPAttributes, IS_GROUPAttributes> implements IS_GROUPAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_MEMBERS?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_GENERATE_FEED?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_PARENT_GUID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_LAST_CHANGE_PROFILE_ID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_DELETED?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_LAST_CHANGE?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_READONLY?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_MEMBERS_CAN_CREATE_CONNECT?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_SYNCHONIZATION?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_TITLE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_SORTIERUNG?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_IMPORTANT?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_SYNC_GROUPS?: boolean;

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
    	L_CHART?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_MODERATOR_PROFILE_ID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_RECOMMENDATION_ENABLED?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_URGENT?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_IMAGE?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_POST_COUNT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_DELETED_MEMBERS?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_STATUS?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_ACTIVATE_APPLICATIONS?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_DESCRIPTION?: string;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_DELETION?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_PRIVACY_LEVEL?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_INV_MOD_PROFILE_ID?: string;

}