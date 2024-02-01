import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface IS_FILE_SHELF_FILEAttributes {
    LUSERIDINSERT?: number;
    DTINSERT?: Date;
    STRCONTENTTYPE?: string;
    LORDER?: number;
    B_AUSGECHECKT?: boolean;
    LID: number;
    STRURL?: string;
    LUSERID?: number;
    DTLASTMODIFY?: Date;
    DTEDIT?: Date;
    STRFILENAME?: string;
    FKLID?: number;
    STRMETA?: string;
}

@Table({
	tableName: "IS_FILE_SHELF_FILE",
	timestamps: false 
})
export class IS_FILE_SHELF_FILE extends Model<IS_FILE_SHELF_FILEAttributes, IS_FILE_SHELF_FILEAttributes> implements IS_FILE_SHELF_FILEAttributes {

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
    	STRCONTENTTYPE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LORDER?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_AUSGECHECKT?: boolean;

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER 
    })
    	LID!: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STRURL?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTLASTMODIFY?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STRFILENAME?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	FKLID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(2048) 
    })
    	STRMETA?: string;

}