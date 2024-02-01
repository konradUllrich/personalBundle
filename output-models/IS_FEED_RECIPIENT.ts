import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface IS_FEED_RECIPIENTAttributes {
    FKLID?: number;
    LUSERIDINSERT?: number;
    STR_RECIPIENT_USER_GUID?: string;
    LID: number;
    DTEDIT?: Date;
    STR_RECIPIENT_TYPE?: string;
    LUSERID?: number;
    DTINSERT?: Date;
}

@Table({
	tableName: "IS_FEED_RECIPIENT",
	timestamps: false 
})
export class IS_FEED_RECIPIENT extends Model<IS_FEED_RECIPIENTAttributes, IS_FEED_RECIPIENTAttributes> implements IS_FEED_RECIPIENTAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	FKLID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_RECIPIENT_USER_GUID?: string;

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
    	type: DataType.STRING(255) 
    })
    	STR_RECIPIENT_TYPE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

}