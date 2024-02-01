import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface IS_ADVERTISING_FILEAttributes {
    STRCONTENTTYPE?: string;
    STRMETA?: string;
    DTLASTMODIFY?: Date;
    LID: number;
    FKLID?: number;
    LUSERID?: number;
    STRFILENAME?: string;
    STRURL?: string;
    DTEDIT?: Date;
    LUSERIDINSERT?: number;
    DTINSERT?: Date;
    LORDER?: number;
}

@Table({
	tableName: "IS_ADVERTISING_FILE",
	timestamps: false 
})
export class IS_ADVERTISING_FILE extends Model<IS_ADVERTISING_FILEAttributes, IS_ADVERTISING_FILEAttributes> implements IS_ADVERTISING_FILEAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STRCONTENTTYPE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(2048) 
    })
    	STRMETA?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTLASTMODIFY?: Date;

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
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STRFILENAME?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STRURL?: string;

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
    	type: DataType.INTEGER 
    })
    	LORDER?: number;

}