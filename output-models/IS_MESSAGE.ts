import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface IS_MESSAGEAttributes {
    STRID: string;
    DTEDIT?: Date;
    LUSERIDINSERT?: number;
    DT_LAST_CHANGE?: Date;
    STR_TITLE?: string;
    LUSERID?: number;
    STR_STATUS?: string;
    REF_CREATOR_PROFILE_ID?: string;
    L_FILEINFORMATION?: number;
    DTINSERT?: Date;
    REF_LAST_CHANGE_PROFILE_ID?: string;
}

@Table({
	tableName: "IS_MESSAGE",
	timestamps: false 
})
export class IS_MESSAGE extends Model<IS_MESSAGEAttributes, IS_MESSAGEAttributes> implements IS_MESSAGEAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_LAST_CHANGE?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_TITLE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_STATUS?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_CREATOR_PROFILE_ID?: string;

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

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_LAST_CHANGE_PROFILE_ID?: string;

}