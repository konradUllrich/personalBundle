import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface IX_DOC_CATEGORYAttributes {
    STR_TITLE?: string;
    DTEDIT?: Date;
    DTINSERT?: Date;
    LUSERIDINSERT?: number;
    STRID: string;
    LUSERID?: number;
    STR_LANG: string;
    B_DEACTIVATED?: boolean;
}

@Table({
	tableName: "IX_DOC_CATEGORY",
	timestamps: false 
})
export class IX_DOC_CATEGORY extends Model<IX_DOC_CATEGORYAttributes, IX_DOC_CATEGORYAttributes> implements IX_DOC_CATEGORYAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_TITLE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

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
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STR_LANG!: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_DEACTIVATED?: boolean;

}