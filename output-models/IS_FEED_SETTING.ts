import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface IS_FEED_SETTINGAttributes {
    B_BLOCKED_ON_NEWS?: boolean;
    B_READ?: boolean;
    FKLID?: number;
    B_URGENT?: boolean;
    DT_TRACKBACK_TO?: Date;
    LUSERIDINSERT?: number;
    B_FAVORITE?: boolean;
    LID: number;
    B_TRACKING?: boolean;
    B_GIVE_NOTICE?: boolean;
    DT_TRACKBACK_FROM?: Date;
    LUSERID?: number;
    B_IMPORTANT?: boolean;
    B_DONE?: boolean;
    DTINSERT?: Date;
    B_SYSTEMMESSAGE?: boolean;
    REF_PROFILE_ID?: string;
    B_LIKE?: boolean;
    DTEDIT?: Date;
    TXT_GIVE_NOTICE_REASON?: string;
    B_BLOCKED?: boolean;
    STR_TRACKING?: string;
    DT_DONE?: Date;
}

@Table({
	tableName: "IS_FEED_SETTING",
	timestamps: false 
})
export class IS_FEED_SETTING extends Model<IS_FEED_SETTINGAttributes, IS_FEED_SETTINGAttributes> implements IS_FEED_SETTINGAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_BLOCKED_ON_NEWS?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_READ?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	FKLID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_URGENT?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_TRACKBACK_TO?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_FAVORITE?: boolean;

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER 
    })
    	LID!: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_TRACKING?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_GIVE_NOTICE?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_TRACKBACK_FROM?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_IMPORTANT?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_DONE?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_SYSTEMMESSAGE?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_PROFILE_ID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_LIKE?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_GIVE_NOTICE_REASON?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_BLOCKED?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_TRACKING?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_DONE?: Date;

}