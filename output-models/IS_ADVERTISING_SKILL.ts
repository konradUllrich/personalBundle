import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface IS_ADVERTISING_SKILLAttributes {
    DTINSERT?: Date;
    LID: number;
    FKLID?: number;
    STR_SKILL?: string;
    LUSERIDINSERT?: number;
    LUSERID?: number;
    DTEDIT?: Date;
}

@Table({
	tableName: "IS_ADVERTISING_SKILL",
	timestamps: false 
})
export class IS_ADVERTISING_SKILL extends Model<IS_ADVERTISING_SKILLAttributes, IS_ADVERTISING_SKILLAttributes> implements IS_ADVERTISING_SKILLAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER 
    })
    	LID!: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	FKLID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_SKILL?: string;

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
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

}