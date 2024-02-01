import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface XDATAGROUPBFFC028CAttributes {
    STRID: string;
    LUSERIDINSERT?: number;
    STR_DESCRIPTION?: string;
    DTINSERT?: Date;
    STR_TITLE?: string;
    LUSERID?: number;
    DTEDIT?: Date;
}

@Table({
	tableName: "XDATAGROUPBFFC028C",
	timestamps: false 
})
export class XDATAGROUPBFFC028C extends Model<XDATAGROUPBFFC028CAttributes, XDATAGROUPBFFC028CAttributes> implements XDATAGROUPBFFC028CAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_DESCRIPTION?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

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
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

}