import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface IS_ADVERTISING_LANGUAGEAttributes {
    LUSERID?: number;
    DTEDIT?: Date;
    LUSERIDINSERT?: number;
    DTINSERT?: Date;
    STR_LANGUAGE?: string;
    FKLID?: number;
    LID: number;
}

@Table({
	tableName: "IS_ADVERTISING_LANGUAGE",
	timestamps: false 
})
export class IS_ADVERTISING_LANGUAGE extends Model<IS_ADVERTISING_LANGUAGEAttributes, IS_ADVERTISING_LANGUAGEAttributes> implements IS_ADVERTISING_LANGUAGEAttributes {

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

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_LANGUAGE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	FKLID?: number;

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER 
    })
    	LID!: number;

}