import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface LCLINKEDRECORDSPKAttributes {
    L_ID: number;
    L_FKID: number;
    DT_INSERT: Date;
    L_USERID_INSERT: number;
    DT_LAST_EDIT: Date;
    L_USERID_LAST_EDIT: number;
    STR_TYPE: string;
    STR_NAME: string;
    B_VALUE_BOOLEAN?: boolean;
    DT_VALUE_DATETIME?: Date;
    L_VALUE_LONG?: number;
    L_VALUE_INTEGER?: number;
    FLT_VALUE_DOUBLE?: number;
    STR_VALUE_STRING?: string;
}

@Table({
	tableName: "LCLINKEDRECORDSPK",
	timestamps: false 
})
export class LCLINKEDRECORDSPK extends Model<LCLINKEDRECORDSPKAttributes, LCLINKEDRECORDSPKAttributes> implements LCLINKEDRECORDSPKAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER 
    })
    	L_ID!: number;

    @Column({
    	type: DataType.INTEGER 
    })
    	L_FKID!: number;

    @Column({
    	type: DataType.DATE(7) 
    })
    	DT_INSERT!: Date;

    @Column({
    	type: DataType.INTEGER 
    })
    	L_USERID_INSERT!: number;

    @Column({
    	type: DataType.DATE(7) 
    })
    	DT_LAST_EDIT!: Date;

    @Column({
    	type: DataType.INTEGER 
    })
    	L_USERID_LAST_EDIT!: number;

    @Column({
    	type: DataType.STRING(255) 
    })
    	STR_TYPE!: string;

    @Column({
    	type: DataType.STRING(255) 
    })
    	STR_NAME!: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_VALUE_BOOLEAN?: boolean;

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
    	type: DataType.FLOAT(53) 
    })
    	FLT_VALUE_DOUBLE?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_VALUE_STRING?: string;

}