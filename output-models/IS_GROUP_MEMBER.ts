import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface IS_GROUP_MEMBERAttributes {
    B_FAVORITE?: boolean;
    LID: number;
    LUSERID?: number;
    FKSTRID?: string;
    STR_STATUS?: string;
    LUSERIDINSERT?: number;
    STR_USERGUID?: string;
    DTEDIT?: Date;
    B_HIDE_SYSTEMMESSAGES?: boolean;
    DTINSERT?: Date;
    B_SHOW_FEEDS_ON_NEWS?: boolean;
    REF_USERGUID?: string;
    DT_LASTVISIT?: Date;
}

@Table({
	tableName: "IS_GROUP_MEMBER",
	timestamps: false 
})
export class IS_GROUP_MEMBER extends Model<IS_GROUP_MEMBERAttributes, IS_GROUP_MEMBERAttributes> implements IS_GROUP_MEMBERAttributes {

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
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	FKSTRID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_STATUS?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_USERGUID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_HIDE_SYSTEMMESSAGES?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_SHOW_FEEDS_ON_NEWS?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_USERGUID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_LASTVISIT?: Date;

}