import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface IS_EVENTAttributes {
    TXT_MORE_INFOS?: string;
    DT_DELETION?: Date;
    DTINSERT?: Date;
    B_CREATE_FEED?: boolean;
    B_DELETED?: boolean;
    B_IMPORTANT?: boolean;
    DT_TO?: Date;
    L_DURATION_H?: number;
    STR_LOCATION?: string;
    B_URGENT?: boolean;
    STR_STREET?: string;
    TXT_SYNC?: string;
    DTEDIT?: Date;
    TXT_DELETED?: string;
    STR_TITLE?: string;
    REF_CREATOR_PROFILE_ID?: string;
    REF_LAST_CHANGE_PROFILE_ID?: string;
    L_DURATION_MIN?: number;
    B_SHOW_GUESTS?: boolean;
    B_INVITATIONS?: boolean;
    L_IMAGE?: number;
    LUSERID?: number;
    STR_CITY?: string;
    L_CHART?: number;
    STR_GROUP_ID?: string;
    STRID: string;
    LUSERIDINSERT?: number;
    B_PARTICIPANT_CAN_CREATE_CONN?: boolean;
    B_FULLTIME?: boolean;
    DT_FROM?: Date;
    DT_LAST_CHANGE?: Date;
    STR_STATUS?: string;
    B_PUBLIC_EVENT?: boolean;
}

@Table({
	tableName: "IS_EVENT",
	timestamps: false 
})
export class IS_EVENT extends Model<IS_EVENTAttributes, IS_EVENTAttributes> implements IS_EVENTAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_MORE_INFOS?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_DELETION?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_CREATE_FEED?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_DELETED?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_IMPORTANT?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_TO?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_DURATION_H?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_LOCATION?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_URGENT?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_STREET?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_SYNC?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_DELETED?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_TITLE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_CREATOR_PROFILE_ID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_LAST_CHANGE_PROFILE_ID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_DURATION_MIN?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_SHOW_GUESTS?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_INVITATIONS?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_IMAGE?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_CITY?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_CHART?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_GROUP_ID?: string;

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
    	type: DataType.STRING 
    })
    	B_PARTICIPANT_CAN_CREATE_CONN?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_FULLTIME?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_FROM?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_LAST_CHANGE?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_STATUS?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_PUBLIC_EVENT?: boolean;

}