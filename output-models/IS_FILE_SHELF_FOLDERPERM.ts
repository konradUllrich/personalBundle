import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface IS_FILE_SHELF_FOLDERPERMAttributes {
    DTEDIT?: Date;
    LUSERIDINSERT?: number;
    STR_OBJECT_TYPE?: string;
    FKLID?: number;
    DTINSERT?: Date;
    LUSERID?: number;
    LID: number;
    STR_PROFILE_ID?: string;
}

@Table({
	tableName: "IS_FILE_SHELF_FOLDERPERM",
	timestamps: false 
})
export class IS_FILE_SHELF_FOLDERPERM extends Model<IS_FILE_SHELF_FOLDERPERMAttributes, IS_FILE_SHELF_FOLDERPERMAttributes> implements IS_FILE_SHELF_FOLDERPERMAttributes {

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
    	type: DataType.STRING(255) 
    })
    	STR_OBJECT_TYPE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	FKLID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

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
    	type: DataType.STRING(255) 
    })
    	STR_PROFILE_ID?: string;

}