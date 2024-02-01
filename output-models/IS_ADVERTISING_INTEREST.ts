import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface IS_ADVERTISING_INTERESTAttributes {
    LID: number;
    STR_INTEREST?: string;
    DTINSERT?: Date;
    LUSERIDINSERT?: number;
    LUSERID?: number;
    FKLID?: number;
    DTEDIT?: Date;
}

@Table({
	tableName: "IS_ADVERTISING_INTEREST",
	timestamps: false 
})
export class IS_ADVERTISING_INTEREST extends Model<IS_ADVERTISING_INTERESTAttributes, IS_ADVERTISING_INTERESTAttributes> implements IS_ADVERTISING_INTERESTAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER 
    })
    	LID!: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_INTEREST?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

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
    	type: DataType.INTEGER 
    })
    	FKLID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

}