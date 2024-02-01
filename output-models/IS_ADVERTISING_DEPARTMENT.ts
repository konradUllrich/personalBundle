import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface IS_ADVERTISING_DEPARTMENTAttributes {
    LID: number;
    DTINSERT?: Date;
    DTEDIT?: Date;
    STR_DEPARTMENT?: string;
    FKLID?: number;
    LUSERID?: number;
    LUSERIDINSERT?: number;
}

@Table({
	tableName: "IS_ADVERTISING_DEPARTMENT",
	timestamps: false 
})
export class IS_ADVERTISING_DEPARTMENT extends Model<IS_ADVERTISING_DEPARTMENTAttributes, IS_ADVERTISING_DEPARTMENTAttributes> implements IS_ADVERTISING_DEPARTMENTAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER 
    })
    	LID!: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_DEPARTMENT?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	FKLID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

}