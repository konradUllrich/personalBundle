import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface IS_FEEDPKAttributes {
    STR_NAME?: string;
    STR_TYPE?: string;
    B_VALUE_BOOLEAN?: boolean;
    LUSERIDINSERT?: number;
    DT_VALUE_DATETIME?: Date;
    L_VALUE_LONG?: number;
    L_VALUE_INTEGER?: number;
    DTEDIT?: Date;
    FKLID?: number;
    LUSERID?: number;
    LID: number;
    DTINSERT?: Date;
    STR_VALUE_STRING?: string;
    FLT_VALUE_DOUBLE?: number;
}

@Table({
	tableName: "IS_FEEDPK",
	timestamps: false 
})
export class IS_FEEDPK extends Model<IS_FEEDPKAttributes, IS_FEEDPKAttributes> implements IS_FEEDPKAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_NAME?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_TYPE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_VALUE_BOOLEAN?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_VALUE_DATETIME?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_VALUE_LONG?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_VALUE_INTEGER?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

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
    	type: DataType.STRING(255) 
    })
    	STR_VALUE_STRING?: string;

    @Column({
    	allowNull: true,
    	type: DataType.FLOAT(53) 
    })
    	FLT_VALUE_DOUBLE?: number;

}